const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')

// Функция формирования итогового url для запроса
const formUrl = (options) => {
    let baseUrl = 'https://generated.photos/faces'
    
    switch (options.face) {
        case 'natural':
            baseUrl += '/natural'
            break

        case 'beautified':
            baseUrl += '/beautified'
            break

        case 'all':
            break

        default:
            throw new Error('Unknown option value in face')
            break
    }

    switch (options.headPose) {
        case 'front':
            baseUrl += '/front-facing'
            break

        case 'left':
            baseUrl += '/left-facing'
            break

        case 'right':
            baseUrl += '/right-facing'
            break

        case null:
            break

        default:
            throw new Error('Unknown option value in headPose')
            break
    }

    switch (options.age) {
        case 'young':
            baseUrl += '/young-adult'
            break

        case 'adult':
            baseUrl += '/adult'
            break

        case 'child':
            baseUrl += '/child'
            break

        case 'elderly':
            baseUrl += '/elderly'
            break

        case null:
            break

        default:
            throw new Error('Unknown option value in age')
            break
    }

    baseUrl += '/black-race'

    switch (options.hairColor) {
        case 'black':
            baseUrl += '/black-hair'
            break

        case 'brown':
            baseUrl += '/brown-hair'
            break

        case null:
            break

        default:
            throw new Error('Unknown option value in hairColor')
            break
    }

    switch (options.hairLength) {
        case 'short':
            baseUrl += '/short'
            break
        
        case 'medium':
            baseUrl += '/medium'
            break

        case 'long':
            baseUrl += '/long'
            break

        case null:
            break

        default:
            throw new Error('Unknown option value in hairColor')
            break
    }

    switch (options.emotion) {
        case 'joy':
            baseUrl += '/joy'
            break

        case 'neutral':
            baseUrl += '/neutral'
            break

        case null:
            break

        default:
            throw new Error('Unknown option value in emotion')
            break
    }

    switch (options.sex) {
        case 'male':
            baseUrl += '/male'
            break

        case 'female':
            baseUrl += '/female'
            break

        case null:
            break

        default:
            throw new Error('Unknown option value in sex')
            break
    }

    return baseUrl
}

module.exports.get = async (amount = 50, options = {}) => {
    return new Promise(async (resolve, reject) => {
        // Генерируем url на основе переданных фильтров
        const url = formUrl({...{
            face: 'all',
            headPose: null,
            sex: null,
            age: null,
            hairColor: null,
            hairLength: null,
            emotion: null
        }, ...options})

        // Получаем страницу по url и парсим ее
        const response = await fetch(url)
        const rawHTML = await response.text()
        const dom = new JSDOM(rawHTML)
        const imgList = []

        // Ищем все картинки и записываем их src
        dom.window.document.querySelectorAll('img').forEach(block => {
            imgList.push(block.src)
        })

        // Оставляем только нужно кол-во
        imgList.splice(amount)
        resolve(imgList)
    })
}