import { Response } from 'express';
import { Request } from 'express-serve-static-core';
import { Controller } from 'src/Controllers/Controller';
import { IGenre } from 'src/Interfaces/Data/IGenre';
import { Genre } from 'src/Models/Genre';
import { GenreRepository } from 'src/Repositories/GenreRepository';
import { GenreService } from 'src/Services/GenreService';

const genreRepository = new GenreRepository(Genre);
const genreService = new GenreService(genreRepository);

export class GenreController implements Controller {
  async store(req: Request, res: Response) {
    const data: IGenre = req.body;
    try {
      await genreService.createGenre(data);
      return res.status(201).json({ message: 'ok' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async show(req: Request, res: Response) {
    const { genre } = req.params;
    try {
      const item = await genreService.getGenreByName(genre);
      return res.status(200).json( item );
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const items = await genreService.getAllGenres();
      return res.status(200).json( items );
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await genreService.deleteGenre(id);
      return res.status(200).json({ message: 'deleted' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }
}
