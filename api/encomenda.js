module.export = app => {
  const obter = async (req, res) => {
    let codigo = req.params.codigo

    res.status(200).send(codigo)
  }
}
