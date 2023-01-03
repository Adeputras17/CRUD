import User from '../models/userModel.js'

export const getUsers= async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getUserById= async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(501).json({message: error.message});
    }
};

export const saveUser= async(req, res) => {
    const user = new User(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(502).json({message: error.message});
    }
};

export const updateUser= async(req, res) => {
    try {
        const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(202).json(updateduser);
    } catch (error) {
        res.status(503).json({message: error.message});
    }
};

export const deleteUser= async(req, res) => {
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(203).json(deleteduser);
    } catch (error) {
        res.status(504).json({message: error.message});
    }
};



// exports.findAll = (req, res) => {
//     const name = req.query.name;
//     var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
//     Tutorial.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
//   };

export const searchUser = async(req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    try {
        const searchUser = await User.findAll({ where: condition });
        res.status(203).json(searchUser);
    } catch (error) {
        res.status(504).json({message: error.message});
    }
};
  
    // Tutorial.findAll({ where: condition })
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while retrieving tutorials."
    //     });
    //   });
  
