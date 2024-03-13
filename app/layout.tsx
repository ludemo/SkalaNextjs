import './styles.css'

export const metadata = {
  title: 'Skala Studio Arquitectura',
  description: 'Iniciada hace 9 años, Skala Studio promueve la formación especializada de estudiantes próximos a rendir el examen suficiencia tomado por la Facultad de Arquitectura de la UNSA. Nos preocupamos con compromiso y vocación, en el desarrollo del potencial del alumno valorando sus aspiraciones. Ello nos ha permitido ganar la confianza de aquellos que incluso no nos conocen directamente, y a todos nuestros antiguos alumnos: Gracias por sus referencias.',
  dcLanguage : 'Spanish',
  AUTHOR : ' Angel Zevallos Apaza',
  KEYWORDS : ['Arquitectura','Suficiencia','UNSA','Skala','Studio','examen','psicotecnico','academia'],
} 

export default function RootLayout({children}: {readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
