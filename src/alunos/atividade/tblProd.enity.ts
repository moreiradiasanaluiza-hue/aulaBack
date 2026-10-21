import { from } from "rxjs";
import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
@Entity ('produto')
export class Produto {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column ({type:'int'})
    nome!:string;

    @Column ({type:'text'})
    descricao: string;

    @Column ({type:'decimal'})
    preco!:number;

    @Column ({default:0})
    quantidade!:number;

    @Column ({default:true})
    ativo:boolean;
}