import * as context from './AppContext'

export function targetClassName(targetId){
    return context.active === targetId ? context.SELECTABLE_ACTIVE : context.SELECTABLE
}

