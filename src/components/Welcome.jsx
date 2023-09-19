import { useEffect, useState } from "react";

export default function Welcome() {
    const [msg, setMsg] = useState("Cargando...");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:5091/user");
                if (!response.ok) {
                    throw new Error("No se pudo obtener la respuesta del servidor.");
                }
                const data = await response.json();
                setMsg(data.message);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
                setMsg("Ocurrió un error al cargar los datos.");
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <p>{msg}</p>
        </>
    );
}