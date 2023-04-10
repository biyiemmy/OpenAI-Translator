# OpenAI Language Translator

This is a simple translator built with React-JS, CSS, and Tailwind CSS that uses the Open AI [chat completion API](https://platform.openai.com/docs/guides/completion) to translate from a given (English) language to another language.

<div style="text-align:center">
<img src="" width="500">
</div>

## How to use

Install dependencies:

```bash
npm install
```

Rename `.env.example` to `.env` and add your API key. You can get your key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

```bash
VITE_OPENAI_API_KEY='ADD_YOUR_KEY_HERE'
```

Important: Your API key is not secure as there is no backend. If you decide to use this tool in production, you should add a backend to it and store the API key there.

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:number](http://localhost:number) with your prefered browser to see the result.

To build for production:

```bash
npm run build
```


Thanks
