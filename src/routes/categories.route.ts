import { Router } from "express";

import { CategoriesCotroller } from "../controllers/categories.controller";

export const categoriesRoutes = Router();

const controller = new CategoriesCotroller();

categoriesRoutes.post('/', controller.create);