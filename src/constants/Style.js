import * as context from './AppContext'

export function selectable(element){
    let props = element.props
    element.setNativeProps()
    context.selectables.push(element)
    debugger
}

export function selectableActive(){
    return context.SELECTABLE_ACTIVE
}

export function selectableContainer(){
    return context.SELECTABLE_CONTAINER
}