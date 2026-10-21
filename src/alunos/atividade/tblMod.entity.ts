import { from } from "rxjs";
import { text } from "stream/consumers";
import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
@Entity ('modalidade')
export class Modalidade{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column ({length:100})
    nome!:string;

    @Column ({type:'text'})
    descricao!:string;

    @Column ({type:'int'})
    duracaoMinutos!:number;

    @Column ({type:'decimal'})
    valorMensal!:number;

    @Column ({default:true})
    ativa: boolean;

}
