import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Autarquia } from '../types';
import { createAutarquia } from '../autarquiaApi';
import { Button, FormGroup, Intent, InputGroup, Switch } from '@blueprintjs/core';
import { ptBR } from 'date-fns/locale';
import { parse } from 'date-fns';
import './styles.css';

const AddAutarquia: React.FC = () => {
  const [autarquia, setAutarquia] = useState<Partial<Autarquia>>({});
  const [adventicios, setAdventicios] = useState<{ [key: string]: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (name: string, value: any) => {
    setAutarquia({
      ...autarquia,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date | null, fieldName: string) => {
    if (date) {
      handleChange(fieldName, date.toISOString());
    } else {
      handleChange(fieldName, null);
    }
  };

  const parseDate = (dateString: string) => {
    return parse(dateString, 'dd/MM/yyyy', new Date());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let parsedValue: any = value;

    if (name === 'dataAdmissao') {
      parsedValue = parseDate(value).toISOString();
    } 

    if (name === 'numero' || name === 'quantidadeAdventicios') {
      parsedValue = parseInt(value, 10);
      if (isNaN(parsedValue)) parsedValue = 0;
    }
  
    handleChange(name, parsedValue);
  };

  const handleAdventicioChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newAdventicios = adventicios.slice();
    newAdventicios[index] = { ...newAdventicios[index], [name]: value };
    setAdventicios(newAdventicios);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createAutarquia({ ...autarquia, adventicios } as Autarquia);
      navigate('/autarquias');
    } catch (err) {
      setError('Erro ao adicionar autarquia.');
      console.error(err);
    }
  };

  return (
    <div className="add-autarquia-page">
      <h1>Adicionar Autarquia</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <FormGroup label="Nome do Sócio" labelFor="nomeSocio">
          <InputGroup id="nomeSocio" name="nomeSocio" onChange={(e) => handleChange('nomeSocio', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Data de Nascimento" labelFor="dataNascimento">
          <DatePicker
            selected={autarquia.dataNascimento ? new Date(autarquia.dataNascimento) : null}
            onChange={(date) => handleDateChange(date, 'dataNascimento')}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            locale={ptBR}
            customInput={<InputGroup id="dataNascimento" name="dataNascimento" onChange={handleInputChange} />}
          />
        </FormGroup>

        <FormGroup label="Email" labelFor="email">
          <InputGroup id="email" name="email" type="email" onChange={(e) => handleChange('email', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Endereço" labelFor="endereco">
          <InputGroup id="endereco" name="endereco" onChange={(e) => handleChange('endereco', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Número" labelFor="numero">
          <InputGroup id="numero" name="numero" type="number" onChange={handleInputChange} required />
        </FormGroup>

        <FormGroup label="Complemento" labelFor="complemento">
          <InputGroup id="complemento" name="complemento" onChange={(e) => handleChange('complemento', e.target.value)} />
        </FormGroup>

        <FormGroup label="Bairro Residência" labelFor="bairroResidencia">
          <InputGroup id="bairroResidencia" name="bairroResidencia" onChange={(e) => handleChange('bairroResidencia', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Cidade Residência" labelFor="cidadeResidencia">
          <InputGroup id="cidadeResidencia" name="cidadeResidencia" onChange={(e) => handleChange('cidadeResidencia', e.target.value)} required />
        </FormGroup>

        <FormGroup label="UF" labelFor="uf">
          <InputGroup id="uf" name="uf" onChange={(e) => handleChange('uf', e.target.value)} required />
        </FormGroup>

        <FormGroup label="CEP Residência" labelFor="cepResidencia">
          <InputGroup id="cepResidencia" name="cepResidencia" onChange={(e) => handleChange('cepResidencia', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Telefone Residência" labelFor="telefoneResidencia">
          <InputGroup id="telefoneResidencia" name="telefoneResidencia" onChange={(e) => handleChange('telefoneResidencia', e.target.value)} />
        </FormGroup>

        <FormGroup label="Telefone Celular" labelFor="telefoneCelular">
          <InputGroup id="telefoneCelular" name="telefoneCelular" onChange={(e) => handleChange('telefoneCelular', e.target.value)} />
        </FormGroup>

        <FormGroup label="Telefone Comercial" labelFor="telefoneComercial">
          <InputGroup id="telefoneComercial" name="telefoneComercial" onChange={(e) => handleChange('telefoneComercial', e.target.value)} />
        </FormGroup>

        <FormGroup label="Estado Civil" labelFor="estadoCivil">
          <InputGroup id="estadoCivil" name="estadoCivil" onChange={(e) => handleChange('estadoCivil', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Cônjuge" labelFor="conjuge">
          <InputGroup id="conjuge" name="conjuge" onChange={(e) => handleChange('conuge', e.target.value)} />
        </FormGroup>

        <FormGroup label="CPF" labelFor="cpf">
          <InputGroup id="cpf" name="cpf" onChange={(e) => handleChange('cpf', e.target.value)} required />
        </FormGroup>

        <FormGroup label="RG" labelFor="rg">
          <InputGroup id="rg" name="rg" onChange={(e) => handleChange('rg', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Órgão Expedidor" labelFor="orgaoExpedidor">
          <InputGroup id="orgaoExpedidor" name="orgaoExpedidor" onChange={(e) => handleChange('orgaoExpedidor', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Órgão" labelFor="orgao">
          <InputGroup id="orgao" name="orgao" onChange={(e) => handleChange('orgao', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Classificação" labelFor="classificacao">
          <InputGroup id="classificacao" name="classificacao" onChange={(e) => handleChange('classificacao', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Matrícula" labelFor="matricula">
          <InputGroup id="matricula" name="matricula" onChange={(e) => handleChange('matricula', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Matrícula Social" labelFor="matriculaSocial">
          <InputGroup id="matriculaSocial" name="matriculaSocial" onChange={(e) => handleChange('matriculaSocial', e.target.value)} required />
        </FormGroup>

        <FormGroup label="Data de Admissão" labelFor="dataAdmissao">
          <DatePicker
            selected={autarquia.dataAdmissao ? new Date(autarquia.dataAdmissao) : null}
            onChange={(date) => handleDateChange(date, 'dataAdmissao')}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            locale={ptBR}
            customInput={<InputGroup id="dataAdmissao" name="dataAdmissao" onChange={handleInputChange} required />}
          />
        </FormGroup>

        <FormGroup label="Falecido" labelFor="falecido">
          <Switch id="falecido" name="falecido" onChange={(e) => handleChange('falecido', e.target.value)} />
        </FormGroup>

        <FormGroup label="Data de Falecimento" labelFor="dataFalecimento">
          <DatePicker
            selected={autarquia.dataFalecimento ? new Date(autarquia.dataFalecimento) : null}
            onChange={(date) => handleDateChange(date, 'dataFalecimento')}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            locale={ptBR}
            customInput={<InputGroup id="dataFalecimento" name="dataFalecimento" onChange={handleInputChange} />}
          />
        </FormGroup>

        <FormGroup label="Quantidade de Adventícios" labelFor="quantidadeAdventicios">
          <InputGroup
            id="quantidadeAdventicios"
            name="quantidadeAdventicios"
            type="number"
            onChange={(e) => {
              handleInputChange(e);

              const quantidade = parseInt(e.target.value, 10);
              if (!isNaN(quantidade) && quantidade >= 0) {
                setAdventicios(Array(quantidade).fill({}));
              } else {
                setAdventicios([]);
              }
            }}
          />
        </FormGroup>

        {adventicios.map((_, index) => (
          <div key={index} className="adventicio-group">
            <FormGroup label={`Nome do Adventício ${index + 1}`} labelFor={`nomeCompleto${index}`}>
              <InputGroup
                id={`nomeCompleto${index}`}
                name="nomeCompleto"
                onChange={(e) => handleAdventicioChange(index, e)}
                required
              />
            </FormGroup>
          </div>
        ))}

        <FormGroup label="Quantidade de Cooperadores" labelFor="quantidadeCooperadores">
          <InputGroup id="quantidadeCooperadores" name="quantidadeCooperadores" type="number" onChange={(e) => handleChange('quantidadeCooperadores', e.target.value)} />
        </FormGroup>

        <FormGroup label="Dent Cross" labelFor="dentCross">
          <InputGroup id="dentCross" name="dentCross" type="number" onChange={(e) => handleChange('dentCross', e.target.value)} />
        </FormGroup>

        <FormGroup label="OD Med" labelFor="odMed">
          <InputGroup id="odMed" name="odMed" type="number" onChange={(e) => handleChange('odMed', e.target.value)} />
        </FormGroup>

        <FormGroup label="Seguro" labelFor="seguro">
          <InputGroup id="seguro" name="seguro" type="number" onChange={(e) => handleChange('seguro', e.target.value)} />
        </FormGroup>

        <FormGroup label="Reversível" labelFor="reversivel">
          <Switch id="reversivel" name="reversivel" onChange={(e) => handleChange('reversivel', e.target.value)} />
        </FormGroup>

        <FormGroup label="Valor Desconto Seguro" labelFor="valorDescontoSeguro">
          <InputGroup id="valorDescontoSeguro" name="valorDescontoSeguro" onChange={(e) => handleChange('valorDescontoSeguro', e.target.value)} />
        </FormGroup>

        <FormGroup label="Morte Natural" labelFor="morteNatural">
          <InputGroup id="morteNatural" name="morteNatural" onChange={(e) => handleChange('morteNatural', e.target.value)} />
        </FormGroup>

        <FormGroup label="Morte Acidental" labelFor="morteAcidental">
          <InputGroup id="morteAcidental" name="morteAcidental" onChange={(e) => handleChange('morteAcidental', e.target.value)} />
        </FormGroup>

        <FormGroup label="Invalidez Permanente Acidente" labelFor="invalidezPermanenteAcidente">
          <InputGroup id="invalidezPermanenteAcidente" name="invalidezPermanenteAcidente" onChange={(e) => handleChange('invalidezPermanenteAcidente', e.target.value)} />
        </FormGroup>

        <FormGroup label="PS" labelFor="ps">
          <Switch id="ps" name="ps" onChange={(e) => handleChange('ps', e.target.value)} />
        </FormGroup>

        <FormGroup label="Omitido" labelFor="omitido">
          <Switch id="omitido" name="omitido" onChange={(e) => handleChange('omitido', e.target.value)} />
        </FormGroup>

        <FormGroup label="Rio Pax" labelFor="rioPax">
          <InputGroup id="rioPax" name="rioPax" type="number" onChange={(e) => handleChange('riopax', e.target.value)} />
        </FormGroup>

        <FormGroup label="Quantidade de Dependentes" labelFor="quantidadeDependentes">
          <InputGroup id="quantidadeDependentes" name="quantidadeDependentes" type="number" onChange={(e) => handleChange('quantidadeDependentes', e.target.value)} />
        </FormGroup>

        <FormGroup label="Desconto Sócio Efetivo" labelFor="descontoSocioEfetivo">
          <InputGroup id="descontoSocioEfetivo" name="descontoSocioEfetivo" onChange={(e) => handleChange('descontoSocioEfetivo', e.target.value)} />
        </FormGroup>

        <FormGroup label="Histórico do Sócio" labelFor="historicoSocio">
          <InputGroup id="historicoSocio" name="historicoSocio" onChange={(e) => handleChange('historicoSocio', e.target.value)} />
        </FormGroup>

        <FormGroup label="Observações sobre Pagamentos" labelFor="observacoesPagamentos">
          <InputGroup id="observacoesPagamentos" name="observacoesPagamentos" onChange={(e) => handleChange('observacoesPagamentos', e.target.value)} />
        </FormGroup>

        <FormGroup label="Ano Fiscal" labelFor="anoFiscal">
          <DatePicker
            selected={autarquia.anoFiscal ? new Date(autarquia.anoFiscal) : null}
            onChange={(date) => handleDateChange(date, 'anoFiscal')}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            locale={ptBR}
            customInput={<InputGroup id="anoFiscal" name="anoFiscal" onChange={handleInputChange} />}
          />
        </FormGroup>

        <FormGroup label="Total Janeiro" labelFor="totalJaneiro">
          <InputGroup id="totalJaneiro" name="totalJaneiro" type="number" onChange={(e) => handleChange('totalJaneiro', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Fevereiro" labelFor="totalFevereiro">
          <InputGroup id="totalFevereiro" name="totalFevereiro" type="number" onChange={(e) => handleChange('totalFevereiro', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Março" labelFor="totalMarco">
          <InputGroup id="totalMarco" name="totalMarco" type="number" onChange={(e) => handleChange('totalMarco', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Abril" labelFor="totalAbril">
          <InputGroup id="totalAbril" name="totalAbril" type="number" onChange={(e) => handleChange('totalAbril', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Maio" labelFor="totalMaio">
          <InputGroup id="totalMaio" name="totalMaio" type="number" onChange={(e) => handleChange('totalMaio', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Junho" labelFor="totalJunho">
          <InputGroup id="totalJunho" name="totalJunho" type="number" onChange={(e) => handleChange('totalJunho', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Julho" labelFor="totalJulho">
          <InputGroup id="totalJulho" name="totalJulho" type="number" onChange={(e) => handleChange('totalJulho', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Agosto" labelFor="totalAgosto">
          <InputGroup id="totalAgosto" name="totalAgosto" type="number" onChange={(e) => handleChange('totalAgosto', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Setembro" labelFor="totalSetembro">
          <InputGroup id="totalSetembro" name="totalSetembro" type="number" onChange={(e) => handleChange('totalSetembro', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Outubro" labelFor="totalOutubro">
          <InputGroup id="totalOutubro" name="totalOutubro" type="number" onChange={(e) => handleChange('totalOutubro', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Novembro" labelFor="totalNovembro">
          <InputGroup id="totalNovembro" name="totalNovembro" type="number" onChange={(e) => handleChange('totalNovembro', e.target.value)} />
        </FormGroup>

        <FormGroup label="Total Dezembro" labelFor="totalDezembro">
          <InputGroup id="totalDezembro" name="totalDezembro" type="number" onChange={(e) => handleChange('totalDezembro', e.target.value)} />
        </FormGroup>

        <Button type="submit" intent={Intent.PRIMARY}>
          Adicionar Autarquia
        </Button>
      </form>
    </div>
  );
};

export default AddAutarquia;
