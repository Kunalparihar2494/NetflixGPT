import { InferenceClient } from "@huggingface/inference";
import { HUGGING_API_KEY } from "./constant";

const client = new InferenceClient(HUGGING_API_KEY);

export default client;