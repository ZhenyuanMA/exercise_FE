module.exports = (sequelizeInstance, DataTypes) => {
  const Info = sequelizeInstance.define("Info", {
    telephone: DataTypes.BIGINT(20)
  }, {
    timestamps: false,
    indexes: [
      { fields: ['telephone'] }
    ]
  })
  return Info
}