# nigg-face
Photo parser for [generated.photos](https://generated.photos). Only black people avaliable.

## Говорите на русском?
Я вот тоже. Тогда почему бы вам не прочитать [README не русском](https://github.com/k04an/nigg-face/blob/main/README_RU.md)?

## Why?
So, the main reasons of creating this project was that there's no free tools that allow you to get placeholder images of people, in particular black.
Yeah generated.photos have native API, but it's not free and it requires api key. The last thing i want to do in the middle of development is to log in
some website, find my api key, form url and then getting charged for that.

So with this package you can easily access around 30 or 50 images from generated.photos, with all their filters and those kinds of things.

## Why black only?
Bruh

## Usage
You can install this package with following command

```
npm i @k04an/nigg-face
```

Once it's done, you can import it in your project

```js
const niggFace = require('@k04an/nigg-face')
```

The only function you will use is .get(). You can pass number as first argument to get certain amount of images and pass an object as second argument
to apply filters.

Example:

```js
const niggFace = require('@k04an/nigg-face')

niggFace.get(10, {
    sex: 'male'
})
```

The .get() function returns a `Promise`, so make sure to use `.then()` or `async/await`

### Full list of filters
| Option       | Possible values                         |
|--------------|-----------------------------------------|
| `sex`        | `male` or `female`                      |
| `face`       | `natural` or `beautified`               |
| `headPose`   | `front`, `left` or `right`              |
| `age`        | `child`, `young`, `adult`, or `elderly` |
| `hairColor`  | `black` or `brown`                      |
| `hairLength` | `short`, `medium` or `long`             |
| `emotion`    | `joy` or `neutral`                      |
