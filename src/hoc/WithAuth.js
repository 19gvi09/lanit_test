import { useRouter } from "next/router"

export default function WithAuth(Component) {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter()
      const isAuthed = localStorage.getItem("isAuthed") === "true"
      if (!isAuthed) {
        router.push("/login")
        return null
      }
      return <Component {...props} />
    }
    return null
  }
}