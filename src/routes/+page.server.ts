import { error, json } from '@sveltejs/kit'
import * as Sd from '$lib/Sd'

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData()
		const prompt = data.get('prompt') as string

		if (!prompt) throw error(500, 'Missing prompt')

		console.debug(prompt)

		const image = await Sd.runPipeline(prompt)
		console.debug(image)

		return { image }
	},
}
