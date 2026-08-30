import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Potemkine — Kuberniet",description:"Plateforme interministérielle d’orchestration des chaînes logicielles distribuées.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
