let custumers = []

function getDependents(req, res){
    if(!req.params.cpf){
        res.sendStatus(405)
        
    } else {
        let response = custumers.filter(item => item.cpfTitular === req.params.cpf)

        if (response.length == 0){
            res.sendStatus(404)
        } else {
            res.json(response)
        }
    }
}

function deleteCostumer(req, res){
    res.send(req.params.cpf)
}

function getCustumer(req, res){
    if(!req.params.cpf){
        res.json(custumers)
        
    } else {
        let response = custumers.filter(item => item.cpf === req.params.cpf)

        if (response.length == 0){
            res.sendStatus(404)
        } else {
            res.json(response)
        }
    }
}

function editCustomer(req, res){
    res.send(req.params.cpf)
}

function addCustomer(req, res){
    
    let customer = req.body

    if(!customer.cpf || !customer.dataNascimento || !customer.nome){
        res.status(405).json({message: "Input invalido"})
        return
    }

    custumers.push(customer)
    res.sendStatus(201)
}

module.exports = {
    getDependents,
    deleteCostumer,
    getCustumer,
    editCustomer,
    addCustomer
}