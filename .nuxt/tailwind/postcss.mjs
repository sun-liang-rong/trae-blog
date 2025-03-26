import configMerger from "@nuxtjs/tailwindcss/merger";
const config = [
{"content":{"files":["/Users/sunliangrong/Desktop/trae-blog/trae-blog/components/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/sunliangrong/Desktop/trae-blog/trae-blog/components/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/sunliangrong/Desktop/trae-blog/trae-blog/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/sunliangrong/Desktop/trae-blog/trae-blog/pages/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/sunliangrong/Desktop/trae-blog/trae-blog/plugins/**/*.{js,ts,mjs}","/Users/sunliangrong/Desktop/trae-blog/trae-blog/composables/**/*.{js,ts,mjs}","/Users/sunliangrong/Desktop/trae-blog/trae-blog/utils/**/*.{js,ts,mjs}","/Users/sunliangrong/Desktop/trae-blog/trae-blog/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}","/Users/sunliangrong/Desktop/trae-blog/trae-blog/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}","/Users/sunliangrong/Desktop/trae-blog/trae-blog/app.config.{js,ts,mjs}"]}},
{}
].reduce((acc, curr) => configMerger(acc, curr), {});

const resolvedConfig = config;

export default resolvedConfig;