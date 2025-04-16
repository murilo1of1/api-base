import Emprestimo from "../models/EmprestimoModel.js";
import Cliente from "../models/ClienteModel.js";

const get = async (req, res) => {
    try {
      const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
  
      if (!id) {
        const response = await Emprestimo.findAll({
          include: {
            model: Cliente,
            as: 'cliente',
          },
          order: [['id', 'desc']],
        });
  
        return res.status(200).send({
          message: 'Empréstimos encontrados',
          data: response,
        });
      }
  
      const response = await Emprestimo.findOne({
        where: { id },
        include: {
          model: Cliente,
          as: 'cliente',
        },
      });
  
      if (!response) {
        return res.status(404).send('Empréstimo não encontrado');
      }
  
      return res.status(200).send({
        message: 'Empréstimo encontrado',
        data: response,
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message,
      });
    }
};

const create = async (corpo) => {
try {
    const { dataEmprestimo, idCliente } = corpo;

    if (!dataEmprestimo || !idCliente) {
    throw new Error('dataEmprestimo e idCliente são obrigatórios');
    }

    const response = await Emprestimo.create({
    dataEmprestimo,
    idCliente,
    });

    return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

const persist = async (req, res) => {
    try {
      const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
  
      if (!id) {
        const response = await create(req.body);
        return res.status(201).send({
          message: 'Empréstimo criado com sucesso!',
          data: response
        });
      }
  
      const response = await update(req.body, id);
      return res.status(200).send({
        message: 'Empréstimo atualizado com sucesso!',
        data: response
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message
      });
    }
};

const update = async (corpo, id) => {
    try {
      const emprestimo = await Emprestimo.findOne({
        where: { id },
      });
  
      if (!emprestimo) {
        throw new Error('Empréstimo não encontrado');
      }
  
      Object.keys(corpo).forEach((chave) => {
        emprestimo[chave] = corpo[chave];
      });
  
      await emprestimo.save();
  
      return emprestimo;
    } catch (error) {
      throw new Error(error.message);
    }
};

const destroy = async (req, res) => {
    try {
      const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
  
      if (!id) {
        return res.status(400).send('Informe o ID do empréstimo');
      }
  
      const emprestimo = await Emprestimo.findOne({ where: { id } });
  
      if (!emprestimo) {
        return res.status(404).send('Empréstimo não encontrado');
      }
  
      await emprestimo.destroy();
  
      return res.status(200).send({
        message: 'Empréstimo excluído com sucesso',
        data: emprestimo
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message
      });
    }
};
  
    export default {
        get,
        persist,
        destroy
    }
