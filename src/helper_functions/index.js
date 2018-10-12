function extendForm(form,extension){

    if(typeof form!=="object" || typeof extension!=="object") throw "your inputs both have to be objects";

    return {...form,...extension}
}

export default extendForm