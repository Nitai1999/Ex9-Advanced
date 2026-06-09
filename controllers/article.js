const articlesService = require('../services/article');

const createArticle = async (req, res) => {
    res.json(await articlesService.createArticle(req.body.title));
};

const getArticles = async (req, res) => {
    res.json(await articlesService.getArticles());
};

const getArticle = async (req, res) => {
    const article = await articlesService.getArticleById(req.params.id);
    if (!article) {
        return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
};
const updateArticle = async (req, res) => {
    const article = await articlesService.updateArticle(req.params.id, req.body.title);
    if (!article) return res.status(404).json({ errors: ['Article not found'] });
    res.json(article);
};

const deleteArticle = async (req, res) => {
    const article = await articlesService.deleteArticle(req.params.id);
    if (!article) return res.status(404).json({ errors: ['Article not found'] });
    res.json(article);
};

module.exports = { createArticle, getArticles, getArticle, updateArticle, deleteArticle };