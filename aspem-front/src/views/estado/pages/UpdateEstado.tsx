import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { AppDispatch } from '../../../store';
import 'react-datepicker/dist/react-datepicker.css';
import { Estado } from '../typesUpdate';
import { getEstadoById, updateEstado } from '../estadoApi';
import { Button, FormGroup, Intent, InputGroup } from '@blueprintjs/core';
import { ptBR } from 'date-fns/locale';
import { parse } from 'date-fns';
import './addEstadoStyles.css';
import './nice-form.css'
import { addEstadoFailure, updateEstadoSuccess } from '../reducer';

const UpdateEstado: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [estado, setEstado] = useState<Partial<Estado>>({});
  const [adventicios, setAdventicios] = useState<{ nomeCompleto: string }[]>([
    { nomeCompleto: '' }
  ]);
  const [dentCross, setDentCross] = useState<{ nomeCompleto: string }[]>([
    { nomeCompleto: '' }
  ]);
  const [odMed, setOdMed] = useState<{ nomeCompleto: string, data: Date | null }[]>([
    { nomeCompleto: '', data: null }
  ]);
  const [rioPax, setRioPax] = useState<{ nomeCompleto: string, data: Date | null }[]>([
    { nomeCompleto: '', data: null }
  ]);
  const [cooperadores, setCooperadores] = useState<{ nomeCompleto: string }[]>([
    { nomeCompleto: '' }
  ]);
  const [dependentes, setDependentes] = useState<{ nomeCompleto: string, dataNascimento: Date | null }[]>([
    { nomeCompleto: '', dataNascimento: null }
  ]);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchEstado = async () => {
        try {
          const existingEstado = await getEstadoById(id);
          setEstado(existingEstado);

          if (existingEstado.adventiciosEstado) {
            setAdventicios(existingEstado.adventiciosEstado);
          }

          if (existingEstado.dentCrossesEstado) {
            setDentCross(existingEstado.dentCrossesEstado);
          }

          if (existingEstado.odMedsEstado) {
            // Mapeia os dados para o formato esperado
            const formattedOdMed = existingEstado.odMedsEstado.map(item => ({
              nomeCompleto: item.nomeCompleto,
              data: item.data ?? null, // Converte undefined para null
            }));
            setOdMed(formattedOdMed);
          }
          
          if (existingEstado.rioPaxesEstado) {
            // Mapeia os dados para o formato esperado
            const formattedRioPax = existingEstado.rioPaxesEstado.map(item => ({
              nomeCompleto: item.nomeCompleto,
              data: item.data ?? null, // Converte undefined para null
            }));
            setRioPax(formattedRioPax);
          }

          if (existingEstado.cooperadoresEstado) {
            setCooperadores(existingEstado.cooperadoresEstado);
          }

          if (existingEstado.dependentesEstado) {
            // Mapeia os dados para o formato esperado
            const formattedDependentes = existingEstado.dependentesEstado.map(item => ({
              nomeCompleto: item.nomeCompleto,
              dataNascimento: item.dataNascimento ?? null,
            }));
            setDependentes(formattedDependentes);
          }

        } catch (err) {
          console.error('Erro ao carregar estado:', err);
          setError('Erro ao carregar estado.');
        }
      };
      fetchEstado();
    }
  }, [id]);

  const handleChange = (name: string, value: any) => {
    setEstado({
      ...estado,
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

  const handleDateDependentesChange = (date: Date | null, index: number) => {
    if (date) {
      const newDependentes = [...dependentes];
      newDependentes[index] = { ...newDependentes[index], dataNascimento: date };
      setDependentes(newDependentes);
    } else {
      const newDependentes = [...dependentes];
      newDependentes[index] = { ...newDependentes[index], dataNascimento: null };
      setDependentes(newDependentes);
    }
  };
  const handleDateRioPaxChange = (date: Date | null, index: number) => {
    if (date) {
      const newRioPax = [...rioPax];
      newRioPax[index] = { ...newRioPax[index], data: date };
      setRioPax(newRioPax);
    } else {
      const newRioPax = [...rioPax];
      newRioPax[index] = { ...newRioPax[index], data: null };
      setRioPax(newRioPax);
    }
  };

  const handleDateOdMedChange = (date: Date | null, index: number) => {
    if (date) {
      const newOdMed = [...odMed];
      newOdMed[index] = { ...newOdMed[index], data: date };
      setOdMed(newOdMed);
    } else {
      const newOdMed = [...odMed];
      newOdMed[index] = { ...newOdMed[index], data: null };
      setOdMed(newOdMed);
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

    if (name === 'numero' || name === 'quantidadeAdventicios' || name === 'quantidadeDentCross' || name === 'quantidadeOdMed' || name === 'quantidadeRioPax' || name === 'quantidadeCooperadores' || name === 'quantidadeDependentes' || name === 'seguro' || name === 'totalJaneiro' || name === 'totalFevereiro' || name === 'totalMarco' || name === 'totalAbril' || name === 'totalMaio' || name === 'totalJunho' || name === 'totalJulho' || name === 'totalAgosto' || name === 'totalSetembro' || name === 'totalOutubro' || name === 'totalNovembro' || name === 'totalDezembro') {
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

  const handleDentCrossChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newDentCross = dentCross.slice();
    newDentCross[index] = { ...newDentCross[index], [name]: value };
    setDentCross(newDentCross);
  };

  const handleOdMedChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newOdMed = odMed.slice();
    newOdMed[index] = { ...newOdMed[index], [name]: value };
    setOdMed(newOdMed);
  };

  const handleRioPaxChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newRioPax = rioPax.slice();
    newRioPax[index] = { ...newRioPax[index], [name]: value };
    setRioPax(newRioPax);
  };

  const handleCooperadoresChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newCooperadores = cooperadores.slice();
    newCooperadores[index] = { ...newCooperadores[index], [name]: value };
    setCooperadores(newCooperadores);
  };

  const handleDependentesChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newDependentes = dependentes.slice();
    newDependentes[index] = { ...newDependentes[index], [name]: value };
    setDependentes(newDependentes);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const estadoToSend: Partial<Estado> = { ...estado };
  
    Object.keys(estadoToSend).forEach((key) => {
      if (estadoToSend[key as keyof Estado] === null || estadoToSend[key as keyof Estado] === undefined) {
        delete estadoToSend[key as keyof Estado];
      }
    });
  
    if (adventicios.length === 0) {
      delete estadoToSend.adventicios;
    } else {
      estadoToSend.adventicios = adventicios;
    }
  
    if (cooperadores.length === 0) {
      delete estadoToSend.cooperadores;
    } else {
      estadoToSend.cooperadores = cooperadores;
    }
  
    if (dentCross.length === 0) {
      delete estadoToSend.dentCross;
    } else {
      estadoToSend.dentCross = dentCross;
    }
  
    if (odMed.length === 0) {
      delete estadoToSend.odMed;
    } else {
      estadoToSend.odMed = odMed.map(item => ({
        ...item,
        data: item.data === null ? undefined : item.data,
      }));
    }
  
    if (rioPax.length === 0) {
      delete estadoToSend.rioPax;
    } else {
      estadoToSend.rioPax = rioPax.map(item => ({
        ...item,
        data: item.data === null ? undefined : item.data,
      }));
    }
    
    if (dependentes.length === 0) {
      delete estadoToSend.dependentes;
    } else {
      estadoToSend.dependentes = dependentes.map(item => ({
        ...item,
        dataNascimento: item.dataNascimento === null ? undefined : item.dataNascimento,
      }));
    }
  
    const id = estado.id;
  
    if (!id) {
      console.error("ID da estado não está definido.");
      return;
    }
    
    try {
      const updatedEstado = await updateEstado(id, estadoToSend);
      dispatch(updateEstadoSuccess(updatedEstado));
      navigate('/estados');
    } catch (err: any) {
      const errorResponse = err.response?.data;
  
      const errorMessage = Array.isArray(errorResponse?.message)
        ? errorResponse.message.join(' ')
        : errorResponse?.message || 'Erro ao atualizar estado.';
  
      dispatch(addEstadoFailure(errorMessage));
  
      console.error(errorMessage);
    }
  };  

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const formElements = formRef.current?.elements as HTMLCollectionOf<HTMLElement>;
      const index = Array.from(formElements).indexOf(e.target as HTMLElement);
      if (index > -1 && index < formElements.length - 1) {
        (formElements[index + 1] as HTMLElement).focus();
      }
    }
  };

  return (
    <div className="add-estado-page">
      <h1>Estado</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} ref={formRef} onKeyPress={handleKeyPress}>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label htmlFor="orgao" className="form-label">
              Órgão
            </label>
            <input 
              id="orgao" 
              name="orgao" 
              className="nice-input" 
              type="text"
              placeholder='Órgão'
              value={estado.orgao || ''}
              onChange={(e) => handleChange('orgao', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="classificacao" className="form-label">
              Classificação
            </label>
            <input 
              id="classificacao" 
              name="classificacao" 
              className="nice-input" 
              type="text"
              placeholder='Classificação'
              value={estado.classificacao || ''}
              onChange={(e) => handleChange('classificacao', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="matricula" className="form-label">
              Matrícula
            </label>
            <input 
              id="matricula" 
              name="matricula" 
              className="nice-input" 
              type="text"
              placeholder="Matrícula"
              value={estado.matricula || ''}
              onChange={(e) => handleChange('matricula', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="matriculaSocial" className="form-label">
              Matrícula Social
            </label>
            <input 
              id="matriculaSocial" 
              name="matriculaSocial" 
              className="nice-input" 
              type="text"
              placeholder="Matrícula Social"
              value={estado.matriculaSocial || ''}
              onChange={(e) => handleChange('matriculaSocial', e.target.value)} 
              required 
            />
          </div>
        </div>

        <div className="nice-form-group">
          <label htmlFor="nomeSocio" className="form-label">
            Nome do Sócio
          </label>
          <input 
            id="nomeSocio" 
            name="nomeSocio" 
            className="nice-input"
            type="text"
            placeholder="Nome do Sócio"
            value={estado.nomeSocio || ''}
            onChange={(e) => handleChange('nomeSocio', e.target.value)} 
            required 
          />
        </div>

        <div className="form-container-three">
          <div className="nice-form-group">
            <label htmlFor="endereco" className="form-label">
              Endereço
            </label>
            <input 
              id="endereco" 
              name="endereco" 
              className="nice-input" 
              type="text"
              placeholder="Endereço"
              value={estado.endereco || ''}
              onChange={(e) => handleChange('endereco', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="numero" className="form-label">
              Número
            </label>
            <input 
              id="numero" 
              name="numero" 
              className="nice-input" 
              type="text"
              placeholder="Número"
              value={estado.numero || ''}
              onChange={handleInputChange} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="complemento" className="form-label">
              Complemento
            </label>
            <input 
              id="complemento" 
              name="complemento" 
              className="nice-input" 
              type="text"
              placeholder="Complemento"
              value={estado.complemento || ''}
              onChange={(e) => handleChange('complemento', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="bairroResidencia" className="form-label">
              Bairro Residência
            </label>
            <input 
              id="bairroResidencia" 
              name="bairroResidencia" 
              className="nice-input" 
              type="text"
              placeholder="Bairro Residência"
              value={estado.bairroResidencia || ''}
              onChange={(e) => handleChange('bairroResidencia', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="cepResidencia" className="form-label">
              CEP Residência
            </label>
            <input 
              id="cepResidencia" 
              name="cepResidencia" 
              className="nice-input" 
              type="text"
              placeholder="CEP Residência"
              value={estado.cepResidencia || ''}
              onChange={(e) => handleChange('cepResidencia', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="cidadeResidencia" className="form-label">
              Cidade Residência
            </label>
            <input 
              id="cidadeResidencia" 
              name="cidadeResidencia" 
              className="nice-input" 
              type="text"
              placeholder="Cidade Residência"
              value={estado.cidadeResidencia || ''}
              onChange={(e) => handleChange('cidadeResidencia', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="uf" className="form-label">
              UF
            </label>
            <input 
              id="uf" 
              name="uf" 
              className="nice-input" 
              type="text"
              placeholder="UF"
              value={estado.uf || ''}
              onChange={(e) => handleChange('uf', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <FormGroup label="Data de Nascimento" labelFor="dataNascimento">
              <DatePicker
                selected={estado.dataNascimento ? new Date(estado.dataNascimento) : null}
                onChange={(date) => handleDateChange(date, 'dataNascimento')}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/AAAA"
                locale={ptBR}
                customInput={<InputGroup id="dataNascimento" name="dataNascimento" onChange={handleInputChange} />}
              />
            </FormGroup>
          </div>

          <div className="nice-form-group">
            <FormGroup label="Data de Admissão" labelFor="dataAdmissao">
              <DatePicker
                selected={estado.dataAdmissao ? new Date(estado.dataAdmissao) : null}
                onChange={(date) => handleDateChange(date, 'dataAdmissao')}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/AAAA"
                locale={ptBR}
                customInput={<InputGroup id="dataAdmissao" name="dataAdmissao" onChange={handleInputChange} />}
              />
            </FormGroup>
          </div>
        </div>

        <div className="form-container-three">
          <div className="nice-form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input 
              id="email" 
              name="email" 
              className="nice-input" 
              type="email"
              placeholder="Email"
              value={estado.email || ''}
              onChange={(e) => handleChange('email', e.target.value)} 
              required
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="telefoneResidencia" className="form-label">
              Telefone Residência
            </label>
            <input 
              id="telefoneResidencia" 
              name="telefoneResidencia" 
              className="nice-input" 
              type="text"
              placeholder="Telefone Residência"
              value={estado.telefoneResidencia || ''}
              onChange={(e) => handleChange('telefoneResidencia', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="telefoneCelular" className="form-label">
              Telefone Celular
            </label>
            <input 
              id="telefoneCelular" 
              name="telefoneCelular" 
              className="nice-input" 
              type="text"
              placeholder="Telefone Celular"
              value={estado.telefoneCelular || ''}
              onChange={(e) => handleChange('telefoneCelular', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="telefoneComercial" className="form-label">
              Telefone Comercial
            </label>
            <input 
              id="telefoneComercial" 
              name="telefoneComercial" 
              className="nice-input" 
              type="text"
              placeholder="Telefone Comercial"
              value={estado.telefoneComercial || ''}
              onChange={(e) => handleChange('telefoneComercial', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="estadoCivil" className="form-label">
              Estado Civil
            </label>
            <input 
              id="estadoCivil" 
              name="estadoCivil" 
              className="nice-input" 
              type="text"
              placeholder="Estado Civil"
              value={estado.estadoCivil || ''}
              onChange={(e) => handleChange('estadoCivil', e.target.value)}
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="conjuge" className="form-label">
              Cônjuge
            </label>
            <input 
              id="conjuge" 
              name="conjuge" 
              className="nice-input" 
              type="text"
              placeholder="Cônjuge"
              value={estado.conjuge || ''}
              onChange={(e) => handleChange('conjuge', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="cpf" className="form-label">
              CPF
            </label>
            <input 
              id="cpf" 
              name="cpf" 
              className="nice-input" 
              type="text"
              placeholder="CPF"
              value={estado.cpf || ''}
              onChange={(e) => handleChange('cpf', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="rg" className="form-label">
              RG
            </label>
            <input 
              id="rg" 
              name="rg" 
              className="nice-input" 
              type="text"
              placeholder="RG"
              value={estado.rg || ''}
              onChange={(e) => handleChange('rg', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="orgaoExpedidor" className="form-label">
              Órgão Expedidor
            </label>
            <input 
              id="orgaoExpedidor" 
              name="orgaoExpedidor" 
              className="nice-input" 
              type="text"
              placeholder="Órgão Expedidor"
              value={estado.orgaoExpedidor || ''}
              onChange={(e) => handleChange('orgaoExpedidor', e.target.value)}
            />
          </div>
        </div>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label>Histórico do Sócio</label>
              <textarea
                id="historicoSocio"
                name="historicoSocio"
                onChange={(e) => handleChange('historicoSocio', e.target.value)}
                placeholder="Histórico do Sócio"
                value={estado.historicoSocio || ''}
                rows={6}
                cols={70}
              />
          </div>
          <div className="nice-form-group">
            <label>Observações sobre pagamentos</label>
            <textarea
              id="observacoesPagamentos"
              name="observacoesPagamentos"
              onChange={(e) => handleChange('observacoesPagamentos', e.target.value)}
              placeholder="Observações sobre pagamentos"
              value={estado.observacoesPagamentos || ''}
              rows={6}
              cols={70}
            />
          </div>    
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="falecido" style={{ marginRight: '8px', marginBottom: '0px' }}>Falecido</label>
            <input type="checkbox" id="falecido" name="falecido" />
          </div>

          <div className="nice-form-group">
            <FormGroup label="Data de Falecimento" labelFor="dataFalecimento">
              <DatePicker
                selected={estado.dataFalecimento ? new Date(estado.dataFalecimento) : null}
                onChange={(date) => handleDateChange(date, 'dataFalecimento')}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/AAAA"
                locale={ptBR}
                customInput={<InputGroup id="dataFalecimento" name="dataFalecimento" onChange={handleInputChange} />}
              />
            </FormGroup>
          </div>
        </div>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label htmlFor="seguro" className="form-label">
              Faixa Seguro
            </label>
            <input 
              id="seguro" 
              name="seguro" 
              className="nice-input" 
              type="text"
              placeholder="Faixa Seguro"
              value={estado.seguro || ''}
              onChange={handleInputChange} 
            />
          </div>

          <div className="nice-form-group" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="reversivel" style={{ marginRight: '8px', marginBottom: '0px' }}>Reversível</label>
            <input type="checkbox" id="reversivel" name="reversivel" />
          </div>
        </div>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label htmlFor="valorDescontoSeguro" className="form-label">
              Valor Desconto Seguro
            </label>
            <input 
              id="valorDescontoSeguro" 
              name="valorDescontoSeguro" 
              className="nice-input" 
              type="text"
              placeholder="Valor Desconto Seguro"
              value={estado.valorDescontoSeguro || ''}
              onChange={(e) => handleChange('valorDescontoSeguro', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="morteNatural" className="form-label">
              Morte Natural
            </label>
            <input 
              id="morteNatural" 
              name="morteNatural" 
              className="nice-input" 
              type="text"
              value={estado.morteNatural || ''}
              placeholder='Morte natural'
              onChange={(e) => handleChange('morteNatural', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="morteAcidental" className="form-label">
              Morte Acidental
            </label>
            <input 
              id="morteAcidental" 
              name="morteAcidental" 
              className="nice-input" 
              type="text"
              placeholder="Morte Acidental"
              value={estado.morteAcidental || ''}
              onChange={(e) => handleChange('morteAcidental', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="invalidezPermanenteAcidente" className="form-label">
              Invalidez Permanente Acidente
            </label>
            <input 
              id="invalidezPermanenteAcidente" 
              name="invalidezPermanenteAcidente" 
              className="nice-input" 
              type="text"
              placeholder="Invalidez Permanente Acidente"
              value={estado.invalidezPermanenteAcidente || ''}
              onChange={(e) => handleChange('invalidezPermanenteAcidente', e.target.value)} 
            />
          </div>
        </div>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label htmlFor="descontoSocioEfetivo" className="form-label">
              Desconto Sócio Efetivo
            </label>
            <input 
              id="descontoSocioEfetivo" 
              name="descontoSocioEfetivo" 
              className="nice-input" 
              type="text"
              placeholder="Desconto Sócio Efetivo"
              value={estado.descontoSocioEfetivo || ''}
              onChange={handleInputChange} 
            />
          </div>

          <div className="nice-form-group" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="omitido" style={{ marginRight: '8px', marginBottom: '0px' }}>Omitido</label>
            <input type="checkbox" id="omitido" name="omitido" />
          </div>
        </div>

        <div className="form-container-lonely">
        <div className="nice-form-group" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="ps" style={{ marginRight: '8px', marginBottom: '0px' }}>PS</label>
            <input type="checkbox" id="ps" name="ps" />
          </div>
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <label htmlFor="anoFiscal" className="form-label">
              Ano Fiscal
            </label>
            <input 
              id="anoFiscal" 
              name="anoFiscal" 
              className="nice-input" 
              type="text"
              placeholder="Ano Fiscal"
              onChange={(e) => handleChange('anoFiscal', e.target.value)}
            />
          </div>
        </div>

        <div className="form-container-three">
        <div className="nice-form-group">
          <label htmlFor="totalJaneiro" className="form-label">
            Total Janeiro
          </label>
          <input 
            id="totalJaneiro" 
            name="totalJaneiro" 
            className="nice-input" 
            type="text"
            placeholder="Total Janeiro"
            value={estado.totalJaneiro || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalFevereiro" className="form-label">
            Total Fevereiro
          </label>
          <input 
            id="totalFevereiro" 
            name="totalFevereiro" 
            className="nice-input" 
            type="text"
            placeholder="Total Fevereiro"
            value={estado.totalFevereiro || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalMarco" className="form-label">
            Total Março
          </label>
          <input 
            id="totalMarco" 
            name="totalMarco" 
            className="nice-input" 
            type="text"
            placeholder="Total Março"
            value={estado.totalMarco || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalAbril" className="form-label">
            Total Abril
          </label>
          <input 
            id="totalAbril" 
            name="totalAbril" 
            className="nice-input" 
            type="text"
            placeholder="Total Abril"
            value={estado.totalAbril || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalMaio" className="form-label">
            Total Maio
          </label>
          <input 
            id="totalMaio" 
            name="totalMaio" 
            className="nice-input" 
            type="text"
            placeholder="Total Maio"
            value={estado.totalMaio || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalJunho" className="form-label">
            Total Junho
          </label>
          <input 
            id="totalJunho" 
            name="totalJunho" 
            className="nice-input" 
            type="text"
            placeholder="Total Junho"
            value={estado.totalJunho || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalJulho" className="form-label">
            Total Julho
          </label>
          <input 
            id="totalJulho" 
            name="totalJulho" 
            className="nice-input" 
            type="text"
            placeholder="Total Julho"
            value={estado.totalJulho || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalAgosto" className="form-label">
            Total Agosto
          </label>
          <input 
            id="totalAgosto" 
            name="totalAgosto" 
            className="nice-input" 
            type="text"
            placeholder="Total Agosto"
            value={estado.totalAgosto || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalSetembro" className="form-label">
            Total Setembro
          </label>
          <input 
            id="totalSetembro" 
            name="totalSetembro" 
            className="nice-input" 
            type="text"
            placeholder="Total Setembro"
            value={estado.totalSetembro || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalOutubro" className="form-label">
            Total Outubro
          </label>
          <input 
            id="totalOutubro" 
            name="totalOutubro" 
            className="nice-input" 
            type="text"
            placeholder="Total Outubro"
            value={estado.totalOutubro || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalNovembro" className="form-label">
            Total Novembro
          </label>
          <input 
            id="totalNovembro" 
            name="totalNovembro" 
            className="nice-input" 
            type="text"
            placeholder="Total Novembro"
            value={estado.totalNovembro || ''}
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalDezembro" className="form-label">
            Total Dezembro
          </label>
          <input 
            id="totalDezembro" 
            name="totalDezembro" 
            className="nice-input" 
            type="text"
            placeholder="Total Dezembro"
            value={estado.totalDezembro || ''}
            onChange={handleInputChange} 
          />
        </div>
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Adventícios" labelFor="quantidadeAdventicios">
              <InputGroup
                id="quantidadeAdventicios"
                name="quantidadeAdventicios"
                type="number"
                value={estado.quantidadeAdventicios ? estado.quantidadeAdventicios.toString() : ''}
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
          </div>

          {adventicios.map((adventicio, index) => (
            <div key={index} className="adventicio-group">
              <FormGroup label={`Adventício ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  value={adventicio.nomeCompleto}
                  onChange={(e) => handleAdventicioChange(index, e)}
                  required
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Faixa Dente Cross" labelFor="quantidadeDentCross">
              <InputGroup
                id="quantidadeDentCross"
                name="quantidadeDentCross"
                type="number"
                value={estado.quantidadeDentCross ? estado.quantidadeDentCross.toString() : ''}
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setDentCross(Array(quantidade).fill({}));
                  } else {
                    setDentCross([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {dentCross.map((dentCrossItem, index) => {
            return (
              <div key={index} className="dentCross-group">
                <FormGroup label={`Beneficiário ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                  <InputGroup
                    id={`nomeCompleto${index}`}
                    name="nomeCompleto"
                    value={dentCrossItem.nomeCompleto || ''}
                    onChange={(e) => handleDentCrossChange(index, e)}
                    required
                  />
                </FormGroup>
              </div>
            );
          })}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Faixa OD Med" labelFor="quantidadeOdMed">
              <InputGroup
                id="quantidadeOdMed"
                name="quantidadeOdMed"
                type="number"
                value={estado.quantidadeOdMed ? estado.quantidadeOdMed.toString() : ''}
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setOdMed(Array(quantidade).fill({}));
                  } else {
                    setOdMed([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {odMed.map((odMed, index) => (
            <div key={index} className="odMed-group">
              <FormGroup label={`Beneficiário ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  value={odMed.nomeCompleto}
                  onChange={(e) => handleOdMedChange(index, e)}
                  required
                />
              </FormGroup>
              <FormGroup label={`Data de Nascimento ${index + 1}`} labelFor={`data${index}`}>
                <DatePicker
                  selected={odMed.data ? new Date(odMed.data) : null}
                  onChange={(date) => handleDateOdMedChange(date, index)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="DD/MM/AAAA"
                  locale={ptBR}
                  customInput={<InputGroup id={`data${index}`} name="data" onChange={(e) => handleOdMedChange(index, e)} />}
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Rio Pax" labelFor="quantidadeRioPax">
              <InputGroup
                id="quantidadeRioPax"
                name="quantidadeRioPax"
                type="number"
                value={estado.quantidadeRioPax ? estado.quantidadeRioPax.toString() : ''}
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setRioPax(Array(quantidade).fill({}));
                  } else {
                    setRioPax([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {rioPax.map((rioPax, index) => (
            <div key={index} className="rioPax-group">
              <FormGroup label={`Beneficiário ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  value={rioPax.nomeCompleto}
                  onChange={(e) => handleRioPaxChange(index, e)}
                  required
                />
              </FormGroup>
              <FormGroup label={`Data de Nascimento ${index + 1}`} labelFor={`data${index}`}>
                <DatePicker
                  selected={rioPax.data ? new Date(rioPax.data) : null}
                  onChange={(date) => handleDateRioPaxChange(date, index)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="DD/MM/AAAA"
                  locale={ptBR}
                  customInput={<InputGroup id={`data${index}`} name="data" onChange={(e) => handleRioPaxChange(index, e)} />}
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Cooperadores" labelFor="quantiadadeCooperadores">
              <InputGroup
                id="quantidadeCooperadores"
                name="quantidadeCooperadores"
                type="number"
                value={estado.quantidadeCooperadores ? estado.quantidadeCooperadores.toString() : ''}
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setCooperadores(Array(quantidade).fill({}));
                  } else {
                    setCooperadores([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {cooperadores.map((cooperador, index) => (
            <div key={index} className="cooperadores-group">
              <FormGroup label={`Beneficiário ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  value={cooperador.nomeCompleto}
                  onChange={(e) => handleCooperadoresChange(index, e)}
                  required
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Dependentes" labelFor="quantidadeDependentes">
              <InputGroup
                id="quantidadeDependentes"
                name="quantidadeDependentes"
                type="number"
                value={estado.quantidadeDependentes ? estado.quantidadeDependentes.toString() : ''}
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setDependentes(Array(quantidade).fill({}));
                  } else {
                    setDependentes([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {dependentes.map((dependente, index) => (
            <div key={index} className="dependentes-group">
              <FormGroup label={`Dependente ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  value={dependente.nomeCompleto}
                  onChange={(e) => handleDependentesChange(index, e)}
                  required
                />
              </FormGroup>
              <FormGroup label={`Data de Nascimento ${index + 1}`} labelFor={`dataNascimento${index}`}>
                <DatePicker
                  selected={dependente.dataNascimento ? new Date(dependente.dataNascimento) : null}
                  onChange={(date) => handleDateDependentesChange(date, index)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="DD/MM/AAAA"
                  locale={ptBR}
                  customInput={<InputGroup id={`dataNascimento${index}`} name="dataNascimento" onChange={(e) => handleDependentesChange(index, e)} />}
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="button-div">
          <Button type="submit" intent={Intent.PRIMARY}>
            Atualizar Servidor
          </Button>
        </div>

      </form>
    </div>
  );
};

export default UpdateEstado;
