const CsvReaderService = require('../services(logic)/csvreader');
const IndustryModel = require("../model(table)/industryModel")

module.exports.uploadIndustry = async function(req, res){

    let allIndustry = await CsvReaderService.uploadIndustry()
    
    IndustryModel.insertMany(allIndustry).then(data=>{

        res.json({data:data, msg:"Industry Uploaded", status:200})
    })

}