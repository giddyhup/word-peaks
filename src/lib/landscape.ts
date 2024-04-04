import type { Board, Tile } from '$lib/data-model'
import Rand from 'rand-seed'
import { createPond } from './landscape/pond'
import { type XY, xyToGrid } from './math'
import { createHill } from './landscape/hill'
import { createTrees } from './landscape/tree'

export type Feature = {
	id: number
	x: number
	y: number
	xJitter: number
	yJitter: number
	size: number
	delay: number
} & ({ type: 'hill' } | { type: 'tree' })

type OpenTile = {
	x: number
	y: number
	centerWeight: number
	noHill?: boolean
	noPond?: boolean
	nearPonds?: number
	nearTrees?: number
}

export type Landscape = {
	width: number
	height: number
	centerX: number
	centerY: number
	rowsGenerated: number
	features: Feature[]
	tileMap: Map<string, Feature | 'pond'>
	openTiles: Map<string, OpenTile>
	pondTiles: XY[]
	newPondTiles: XY[]
	nextID: number
	pondDelay?: number
	totalDelay: number
	mini?: boolean
}

export const LANDSCAPE_FEATURE_DELAY = 30

export function getLandscape(
	landscape: Landscape,
	board: Board,
	answer: string,
	currentRow: number,
	seedPrefix = ''
): Landscape {
	// No initial delay if loading a partially/fully completed puzzle
	landscape.totalDelay = currentRow > 1 && landscape.rowsGenerated === 0 ? 0 : 500
	landscape.newPondTiles.length = 0
	if (landscape.rowsGenerated === 0 && currentRow > landscape.rowsGenerated) {
		landscape.openTiles.set(xyToGrid([landscape.centerX, landscape.centerY]), {
			x: landscape.centerX,
			y: landscape.centerY,
			centerWeight: 1,
		})
	}
	while (landscape.rowsGenerated < currentRow) {
		const rowTiles = board[landscape.rowsGenerated]
		const rowWord = rowToWord(rowTiles)
		const seed =
			seedPrefix +
			answer +
			board.slice(0, landscape.rowsGenerated).map(rowToWord).join('')
		const rng = new Rand(seed)
		const getRng = () => rng.next()
		const winningRow = rowWord === answer
		for (const tile of rowTiles) {
			if (tile.polarity === 0) {
				createTrees(getRng, landscape, winningRow)
			} else if (tile.polarity < 0) {
				createHill(getRng, landscape)
			} else {
				createPond(getRng, landscape)
			}
		}
		landscape.rowsGenerated++
	}
	// Sort features for proper overlapping
	landscape.features.sort((a, b) => getFeatureY(a) - getFeatureY(b))
	return { ...landscape }
}

export function getCenterWeight({ centerX, centerY }: Landscape, x: number, y: number) {
	const verticalCenter = 1 - Math.abs(y - centerY) / (centerY + 1)
	const horizontalCenter = 1 - Math.abs(x - centerX) / (centerX + 1)
	return verticalCenter * horizontalCenter
}

const getFeatureY = (feature: Feature) => feature.y + feature.yJitter

const rowToWord = (row: Tile[]) => row.map((t) => t.letter).join('')
