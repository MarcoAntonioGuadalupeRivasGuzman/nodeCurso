const file=require('fs')

const createFile = async(contenido,base)=>{
    try{
        file.writeFileSync(`tabla${base}.txt`,contenido)
        return `tabla${base}.txt`
    }
    catch(error){
        throw error
    }
}

module.exports = {
    createFile
}