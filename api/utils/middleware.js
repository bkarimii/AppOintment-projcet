import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import express, { Router } from "express";
import helmet from "helmet";
import morgan from "morgan";

import logger from "./logger.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const asyncHandler = (handler) => {
	/** @type {import("express").RequestHandler} */
	return async (req, res, next) => {
		try {
			await handler(req, res, next);
		} catch (err) {
			next(err);
		}
	};
};

export const clientRouter = (apiRoot) => {
	const staticDir = join(__dirname, "..", "static");
	const router = Router();
	router.use(express.static(staticDir));
	router.use((req, res, next) => {
		if (req.method === "GET" && !req.url.startsWith(apiRoot)) {
			// Because we're seeing a lot of spammers crawling the site, let's not serve the index.html for unknown routes
			// Instead, let's return a 404.  Not least it's less bandwidth.
			// return res.sendFile(join(staticDir, "index.html"));
			logger.warn("returning 404 for unknown route: %s", req.url);
			return res.status(404).send("404 Not Found");
		}
		next();
	});
	return router;
};

export const configuredHelmet = () => helmet({ contentSecurityPolicy: false });

export const configuredMorgan = () =>
	morgan("dev", {
		stream: { write: (message) => logger.info(message.trim()) },
	});

export const httpsOnly = () => (req, res, next) => {
	if (!req.secure) {
		return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
	}
	next();
};

/** @type {() => import("express").ErrorRequestHandler} */
export const logErrors = () => (err, _, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	logger.error("%O", err);
	res.sendStatus(500);
};
