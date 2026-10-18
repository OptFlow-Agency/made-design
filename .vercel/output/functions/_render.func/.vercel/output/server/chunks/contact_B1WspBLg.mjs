import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import nodemailer from "nodemailer";
//#region src/data/site.ts
var site = {
	name: "Made Design",
	email: "oussamachahidi20@gmail.com",
	formEndpoint: "/api/contact"
};
//#endregion
//#region src/pages/api/contact.ts
var contact_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var json = (body, status = 200) => new Response(JSON.stringify(body), {
	status,
	headers: { "Content-Type": "application/json" }
});
var escape = (s) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
var POST = async ({ request }) => {
	const form = await request.formData();
	if (form.get("company")) return json({ ok: true });
	const name = String(form.get("name") ?? "").trim();
	const email = String(form.get("email") ?? "").trim();
	const message = String(form.get("message") ?? "").trim();
	if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) return json({ ok: false }, 400);
	const user = "oussamachahidi20@gmail.com";
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user,
			pass: "zjfu ggok fwdp yfiv"
		}
	});
	try {
		await transporter.sendMail({
			from: `"${site.name}" <${user}>`,
			to: site.email,
			replyTo: `"${name.replace(/["\r\n]/g, "")}" <${email}>`,
			subject: `New message from ${name.replace(/[\r\n]/g, " ")}`,
			text: `From: ${name} <${email}>

${message}`,
			html: `<p><strong>${escape(name)}</strong> &lt;${escape(email)}&gt;</p><p>${escape(message).replace(/\n/g, "<br>")}</p>`
		});
		return json({ ok: true });
	} catch (err) {
		console.error("contact: send failed", err);
		return json({ ok: false }, 502);
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@ts
var page = () => contact_exports;
//#endregion
export { page };
