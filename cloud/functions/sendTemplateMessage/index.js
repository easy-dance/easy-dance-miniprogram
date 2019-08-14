// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // console.log(event.templateData);
  const result = await cloud.openapi.templateMessage.send(event.templateData)
  return result
}