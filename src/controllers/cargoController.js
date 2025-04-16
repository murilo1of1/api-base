import Cargo from "../models/CargoModel.js";

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await Cargo.findAll({
        order: [['id', 'desc']],
      });

      return res.status(200).send({
        message: 'Cargos encontrados',
        data: response,
      });
    }

    const response = await Cargo.findOne({
      where: {
        id: id
      }
    });

    if (!response) {
      return res.status(404).send('Cargo não encontrado');
    }

    return res.status(200).send({
      message: 'Cargo encontrado',
      data: response,
    });

  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

export default {
    get
};