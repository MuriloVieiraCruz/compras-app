import { Image, TouchableOpacity, Text, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';
import { useEffect, useState } from 'react';
import { itemStorage, ItemStorage } from '@/storage/itemsStorage';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemStorage[]>([]);

  async function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar");
    }

    const newItem: ItemStorage = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    }

    const items = await itemStorage.add(newItem);
    setItems(items);

    Alert.alert("Adicionado", `Adicionado ${description}`);
    setDescription("");
    setFilter(FilterStatus.PENDING);
  }

  async function handleRemove(id: string) {
    try {
      await itemStorage.remove(id);
      await itemsByStatus();
    } catch(error) {
      Alert.alert("Remover", "Não foi possível remover o item selecionado.");
    }
  }

  async function onClear() {
    try {
      await itemStorage.clear();
      setItems([]);
    } catch(error) {
      Alert.alert("Limpar", "Não foi possível remover todos os itens.");
    }
  }

  function handleClear() {
    Alert.alert("Limpar", "Deseja realmente apagar todos?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => onClear() }
    ]);
  }

  async function itemsByStatus() {
    try {
      const response = await itemStorage.getByStatus(filter);
      setItems(response);
    } catch(error) {
      Alert.alert("Erro", "Não foi possível filtrar os itens.")
    }
  }

  useEffect(() => {
    itemsByStatus();
  }, [filter]);

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo}/>
      
      <View style={styles.form}>
        <Input 
          placeholder='O que você precisa comprar?'
          onChangeText={setDescription}
          value={description}
        />
        <Button 
          title='Adicionar'
          onPress={handleAdd}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
              <Filter 
                key={status} 
                status={status} 
                isActive={status === filter}
                onPress={() => setFilter(status)}
              />
            ))
          }

          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

          <FlatList 
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Item
                data={item}
                onRemove={() => handleRemove(item.id)}
                onStatus={() => console.log()}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={() => <Text style={styles.emptyContent}>Nenhum item aqui.</Text>}
          />

      </View>
    </View>
  );
}
