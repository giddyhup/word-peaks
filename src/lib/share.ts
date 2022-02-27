import type { Board, GameMode } from '$lib/data-model'
import { toast } from '@zerodevx/svelte-toast'

export function getShareTitle({
	gameWon,
	guesses,
	gameMode,
	hardMode,
	day,
}: {
	gameWon: boolean
	guesses: string[]
	gameMode: GameMode
	hardMode: boolean
	day?: number
}): string {
	const score = gameWon ? guesses.length : 'X'
	const dayText = gameMode === 'random' ? '∞ ' : `#${day!} `
	const scoreText = `${score}/6${hardMode ? '*' : ''}`
	return `Wordle Peaks ${dayText}${scoreText}`
}

export function getEmojiGrid(guesses: string[], answer: string): string {
	return (
		'  ' +
		guesses
			.map((word) =>
				[...word]
					.map((letter, l) => {
						if (letter === answer[l]) return '🟩'
						return letter > answer[l] ? '🔽' : '🔼'
					})
					.join('')
			)
			.join('\n  ')
	)
}

const successToast = (message: string) =>
	toast.push(message, {
		theme: { '--toastBackground': 'var(--cta-color)' },
	})
const errorToast = () =>
	toast.push("Sorry, couldn't do that!", {
		theme: { '--toastBackground': 'var(--cta-color)' },
	})

export function copyText(text: string): void {
	toast.pop()
	navigator.clipboard.writeText(text).then(
		() => successToast('Score copied!'),
		() => errorToast()
	)
}

export function copyImage(canvas: HTMLCanvasElement): void {
	canvas.toBlob(async (blob) => {
		try {
			let data = [new ClipboardItem({ [blob!.type]: blob! })]
			await navigator.clipboard.write(data)
			successToast('Image copied!')
		} catch (e) {
			errorToast()
		}
	})
}

// https://benkaiser.dev/sharing-images-using-the-web-share-api/
export async function shareImage(
	canvas: HTMLCanvasElement,
	{ hash, day }: { hash?: string; day?: number }
) {
	const imageUrl = canvas.toDataURL()
	const imageBlob = await (await fetch(imageUrl)).blob()
	const filesArray = [
		new File([imageBlob], `wordle-peaks-${hash || day}.png`, {
			type: imageBlob.type,
			lastModified: new Date().getTime(),
		}),
	]
	const shareData = {
		files: filesArray,
	}
	// Fail silently, image will appear in modal to copy
	await navigator.share(shareData)
}

export function drawResults(
	canvas: HTMLCanvasElement,
	{
		highContrast,
		boardContent,
		guesses,
		caption,
	}: { highContrast: boolean; boardContent: Board; guesses: string[]; caption: string }
) {
	if (!canvas) return
	canvas.height = guesses.length * 50 + 30
	const ctx = canvas.getContext('2d')!
	ctx.fillStyle = highContrast ? '#161a25' : '#312236'
	ctx.fillRect(0, 0, 252, 330)
	const roundedRectangle = (
		x: number,
		y: number,
		w: number,
		h: number,
		rTop: number,
		rBottom?: number
	) => {
		rBottom = rBottom ?? rTop
		ctx.beginPath()
		ctx.moveTo(x + rTop, y)
		ctx.arcTo(x + w, y, x + w, y + h, rTop)
		ctx.arcTo(x + w, y + h, x, y + h, rBottom)
		ctx.arcTo(x, y + h, x, y, rBottom)
		ctx.arcTo(x, y, x + w, y, rTop)
		ctx.closePath()
		ctx.fill()
	}
	boardContent.forEach((row, r) => {
		if (r >= guesses.length) return
		row.forEach((tile, t) => {
			let topRadius = 5
			let bottomRadius = 5
			if (tile.distance === 0) {
				ctx.fillStyle = highContrast ? '#64ba2e' : '#15a850'
			} else if (tile.distance > 0) {
				ctx.fillStyle = '#567de8'
				bottomRadius = 14
			} else {
				ctx.fillStyle = highContrast ? '#da3f8b' : '#e38f2f'
				topRadius = 14
			}
			const x = 4 + t * 50
			const y = 4 + r * 50
			const l = 44
			roundedRectangle(x, y, l, l, topRadius, bottomRadius)
		})
	})
	ctx.font = '20px Arial'
	ctx.textAlign = 'center'
	ctx.fillStyle = '#cccccc'
	ctx.fillText(caption, 126, guesses.length * 50 + 22)
}