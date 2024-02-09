import { Router  } from "express";

import { baseRoutes } from "./base.route";
import { categoriesRoutes } from "./categories.route";

export const route = Router();

route.use('/', baseRoutes);
route.use('/categories', categoriesRoutes)