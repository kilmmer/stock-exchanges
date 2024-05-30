export * from './infrastructure'
export * from './domain'
export * from './application'

export function init() {
    
    this.infrastructure.init()
    this.domain.init()
    this.application.init()
}
