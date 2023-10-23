import OpenAI from "openai";
import { OPENAIKEY } from "./constant";

export const openai = new OpenAI({
  apiKey: OPENAIKEY,
  dangerouslyAllowBrowser: true,
});
