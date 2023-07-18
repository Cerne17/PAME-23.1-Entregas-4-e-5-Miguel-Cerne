import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from './entities/funcionario.entity';

@Injectable()
export class FuncionarioService {
  // Injeta a classe de Funcionário dentro deste arquivo para conseguirmos acessar todas suas funcionalidades
  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}
  create(createFuncionarioDto: CreateFuncionarioDto) {
    const newFuncionario = this.funcionarioRepository.create({
      ...createFuncionarioDto,
      createdAt: new Date(),
    });
    this.funcionarioRepository.save(newFuncionario);
  }

  findAll() {
    return this.funcionarioRepository.find();
  }

  findOne(id: number) {
    return this.funcionarioRepository.findOneBy({ id });
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    this.funcionarioRepository.update({ id }, { ...updateFuncionarioDto });
  }

  remove(id: number) {
    return this.funcionarioRepository.delete({ id });
  }
}
