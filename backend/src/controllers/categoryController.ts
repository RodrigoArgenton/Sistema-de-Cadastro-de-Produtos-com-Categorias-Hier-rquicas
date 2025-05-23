import { Request, Response } from "express"
import { createCategory } from "../services/categoryService"
import { getCategoryTree } from '../services/categoryService'

export const handleCreateCategory = async (req: Request, res: Response): Promise<any> => {
    const {name, parentId} = req.body

    try {
        const newCategory = await createCategory(name, parentId)
        return res.status(201).json(newCategory)
    } catch (err) {
        return res.status(500).json({message: 'Erro ao criar a categoria', error: err})
    }
}

export const getCategories = async (req: Request, res: Response) => {
  try {
    const tree = await getCategoryTree()
    res.json(tree)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar categorias' })
  }
}