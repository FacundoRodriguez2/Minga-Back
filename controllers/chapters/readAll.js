const controller = {

    read_all: (req, res) => {
        return res
            .status(200) /* 200:successful reading  */
            .json({
                success: true,
                message: 'all caps here'
            })
    }
}

export default controller