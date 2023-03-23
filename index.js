const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres'
});

const Usuario = sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false // desabilita as colunas createdAt e updatedAt
  });

  async function cadastrarUsuarios() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  
      const usuarios = await Usuario.create({
          id:3,
          usuario: 'John Doe',
          senha: '1234567'
        }).then(usuario => {
          console.log(usuario.toJSON());
        });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

async function consultaUsuarios() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const usuarios = await Usuario.findAll();
    console.log(usuarios);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

//cadastrarUsuarios(); 
consultaUsuarios();

