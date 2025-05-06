export const blockUI = (elem) => {
    elem.classList.add('loader');
}

export const unBlockUI = (elem) => {
    elem.classList.remove('loader');
}
