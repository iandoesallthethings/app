import * as tf from '@tensorflow/tfjs-node-gpu'
import { StableDiffusionPipeline } from 'stable-diffusion-nodejs'

export async function runPipeline(prompt: string) {
	const pipe = await StableDiffusionPipeline.fromPretrained(
		'cuda',
		'aislamov/stable-diffusion-2-1-base-onnx' // relative path or huggingface repo with onnx model
	)
	const image = await pipe.run(prompt, undefined, 1, 9, 30)
	const png = await tf.node.encodePng(image[0])
	return png
}
