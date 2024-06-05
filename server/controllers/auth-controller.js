const home = async (req, res) => {
  try {
    res.send("Home Page");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    res.status(200).send("Login Page");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).json(
        {
            message: "Register Page",
            body: req.body,
        }
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  home,
  login,
  register,
};
