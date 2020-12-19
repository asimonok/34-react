export const createComponent = (stringHtml) => {
  console.log('createComponent', stringHtml)
  return new DOMParser().parseFromString(stringHtml,  'text/html').querySelector('body').firstChild
}

export const notUsedFunction = () => {
  console.log('notUsedFunction')
}
