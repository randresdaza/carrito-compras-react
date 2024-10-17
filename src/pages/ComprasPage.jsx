import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"


export const ComprasPage = () => {

    const { productos } = useContext(ProductosContext)

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }

    const handleQuitar = (id) => {
        eliminarCompra(id)
    }

    return (
        <>
            <h1 className="mt-2">Productos</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="tarjetas-grid">
                    {
                        productos.map(producto => (
                            <Card
                                key={producto.id}
                                imagen={producto.image}
                                titulo={producto.title}
                                descripcion={producto.description}
                                precio={producto.price}
                                handleAgregar={() => handleAgregar(producto)}
                                handleQuitar={() => handleQuitar(producto.id)}
                            >
                            </Card>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
