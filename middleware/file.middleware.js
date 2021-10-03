import formidable from "formidable";

const fileMiddleware = async (req, res) => {
  const form = formidable({ multiples: true, keepExtensions: true });

  try {
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        return resolve([fields, files]);
      });
    });

    const xssProtectedFields = Object.keys(fields).reduce((encoded, key) => {
      const value = fields[key];

      encoded[key] = encodeURI(value);
    }, {});

    req.body = xssProtectedFields;
    req.files = files;
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

export default fileMiddleware;
