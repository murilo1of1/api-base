const pessoas = [
    { id: 1, nome: "Ana", idade: 25 },
    { id: 2, nome: "Bruno", idade: 30 },
    { id: 3, nome: "Carla", idade: 22 },
    { id: 4, nome: "Diego", idade: 28 },
    { id: 5, nome: "Eduarda", idade: 26 },
    { id: 6, nome: "Felipe", idade: 33 },
    { id: 7, nome: "Giovana", idade: 24 },
    { id: 8, nome: "Henrique", idade: 27 },
    { id: 9, nome: "Isabela", idade: 29 },
    { id: 10, nome: "João", idade: 31 }
];
  
const getAll = (req, res) => {
    const { idade } = req.query;

    if (idade) {
        const idadeNumero = parseInt(idade);
        const filtradas = pessoas.filter(p => p.idade === idadeNumero);
        return res.status(200).json(filtradas);
    }
    return res.status(200).send(pessoas)
};

const getID = (req, res) => {
    const id = Number(req.params.id); 
    const pessoa = pessoas.find(p => p.id === id)

    if (!pessoa) {
        return res.status(404).json({ mensagem: 'Pessoa não encontrada' });
    }
    return res.status(200).json(pessoa);
};

export default {
    getAll,
    getID,
}