import { v4 as uuidv4 } from 'uuid';

export class MovieActorEntity {
  public readonly id: string;
  public readonly nameActor: string;

  constructor(nameActor: string) {
    console.debug('1', nameActor);
    if (!nameActor) {
      throw new Error('Nome não pode ser vazio.');
    }
    this.id = uuidv4();
    this.nameActor = nameActor;
  }
}
