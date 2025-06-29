import { Image, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITENS = [
  {
    id: '1',
    status: FilterStatus.DONE,
    description: "Tome no..."
  }
]

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo}/>
      
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar?'/>
        <Button title='Entrar'/>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter key={status} status={status} isActive />
            ))
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

          <FlatList 
            data={ITENS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Item
                data={item}
                onRemove={}
                onStatus={}
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
