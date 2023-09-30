import * as tf from '@tensorflow/tfjs-node-gpu'
import { StableDiffusionPipeline } from 'stable-diffusion-nodejs'
import fs from 'fs'

const pipe = await StableDiffusionPipeline.fromPretrained(
	'directml', // can be 'cuda' on linux or 'cpu' on mac os
	'aislamov/stable-diffusion-2-1-base-onnx' // relative path or huggingface repo with onnx model
)

const image = await pipe.run('A photo of a cat', undefined, 1, 9, 30)
const png = await tf.node.encodePng(image[0])
fs.writeFileSync('output.png', png)
