class Model {
  constructor () {
    this.data = {
      siteName: 'My site',
      pathname: window.location.pathname,
    }
    this.subscribers = []
  }

  update (newState) {
    this.data = {
      ...this.data,
      ...newState
    }
    this.notify()
  }

  getData () {
    return this.data
  }

  notify () {
    this.subscribers.forEach((subscriber) => {
      subscriber(this.data)
    })
  }

  subscribe (subscriber) {
    this.subscribers.push(subscriber)
    return () => {
      this.subscribers = this.subscribers
        .filter((item) => item !== subscriber)
    }
  }
}

export const model = new Model()

window.model = model
