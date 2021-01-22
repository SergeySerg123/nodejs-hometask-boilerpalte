const filterRequestBody = (request, entity) => {
    let targetObj = {}

    Object.keys(entity).forEach((value) => {
        if (value !== 'id') {
            targetObj[value] = request.body[value]
        }       
    })
    
    request.body = targetObj;
}

exports.filterRequestBody = filterRequestBody;